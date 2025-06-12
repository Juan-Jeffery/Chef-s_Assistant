import { recipes } from './recipes.js';

export function scheduleRecipes(selectedIds, availableTools) {
  let schedule = [];
  let toolUsage = {};

  function getToolAvailableTime(tool) {
    if (!tool) return 0;
    return toolUsage[tool] || 0;
  }

  function setToolUsage(tool, endTime) {
    if (!tool) return;
    toolUsage[tool] = endTime;
  }

  selectedIds.forEach(id => {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    const isPasta = recipe.name.includes('義大利麵');
    const isCurry = recipe.name.includes('咖哩') && recipe.steps.length >= 2
                    && recipe.steps[0].name.includes('煮飯')
                    && recipe.steps[1].name.includes('燉咖哩');

    if (isPasta) {
      // 義大利麵邏輯
      const step1 = recipe.steps[0]; // 煮麵
      const step2 = recipe.steps[1]; // 煮醬

      const start1 = getToolAvailableTime(step1.tool);
      const end1 = start1 + step1.time;

      const start2 = getToolAvailableTime(step2.tool);
      const end2 = start2 + step2.time;

      const syncStart = Math.max(start1, start2);
      const syncEnd = Math.max(end1, end2);

      const adjustedEnd1 = syncEnd;
      const adjustedEnd2 = syncEnd;

      setToolUsage(step1.tool, adjustedEnd1);
      setToolUsage(step2.tool, adjustedEnd2);

      schedule.push({
        recipeId: id,
        recipeName: recipe.name,
        stepName: step1.name,
        tool: step1.tool,
        start: syncStart,
        end: adjustedEnd1
      });

      schedule.push({
        recipeId: id,
        recipeName: recipe.name,
        stepName: step2.name,
        tool: step2.tool,
        start: syncStart,
        end: adjustedEnd2
      });

      const stirAvailable = getToolAvailableTime('炒鍋');
      const stirStart = Math.max(syncEnd, stirAvailable);
      const stirEnd = stirStart + 5;

      setToolUsage('炒鍋', stirEnd);

      schedule.push({
        recipeId: id,
        recipeName: recipe.name,
        stepName: '炒麵加醬',
        tool: '炒鍋',
        start: stirStart,
        end: stirEnd
      });

    } else if (isCurry) {
      // 咖哩飯平行處理「煮飯」和「燉咖哩」，不強制同步結束時間
      const cookRiceStep = recipe.steps[0];
      const cookCurryStep = recipe.steps[1];

      const riceStart = getToolAvailableTime(cookRiceStep.tool);
      const riceEnd = riceStart + cookRiceStep.time;
      setToolUsage(cookRiceStep.tool, riceEnd);
      schedule.push({
        recipeId: id,
        recipeName: recipe.name,
        stepName: cookRiceStep.name,
        tool: cookRiceStep.tool,
        start: riceStart,
        end: riceEnd
      });

      const curryStart = getToolAvailableTime(cookCurryStep.tool);
      const curryEnd = curryStart + cookCurryStep.time;
      setToolUsage(cookCurryStep.tool, curryEnd);
      schedule.push({
        recipeId: id,
        recipeName: recipe.name,
        stepName: cookCurryStep.name,
        tool: cookCurryStep.tool,
        start: curryStart,
        end: curryEnd
      });

      const prevStepsEnd = Math.max(riceEnd, curryEnd);

      for (let i = 2; i < recipe.steps.length; i++) {
        const step = recipe.steps[i];
        let start = prevStepsEnd;

        if (step.dependsOn !== undefined) {
          const prevStep = recipe.steps[step.dependsOn];
          start = schedule.find(s => s.recipeId === id && s.stepName === prevStep.name)?.end || prevStepsEnd;
        }

        const toolAvailable = getToolAvailableTime(step.tool);
        const stepStart = Math.max(start, toolAvailable);
        const stepEnd = stepStart + step.time;

        setToolUsage(step.tool, stepEnd);

        schedule.push({
          recipeId: id,
          recipeName: recipe.name,
          stepName: step.name,
          tool: step.tool,
          start: stepStart,
          end: stepEnd
        });
      }

    } else {
      // 一般排程
      recipe.steps.forEach((step, idx) => {
        let start = 0;

        if (step.dependsOn !== undefined) {
          const prevStep = recipe.steps[step.dependsOn];
          start = schedule.find(s => s.recipeId === id && s.stepName === prevStep.name)?.end || 0;
        }

        const toolAvailable = getToolAvailableTime(step.tool);
        const stepStart = Math.max(start, toolAvailable);
        const stepEnd = stepStart + step.time;

        setToolUsage(step.tool, stepEnd);

        schedule.push({
          recipeId: id,
          recipeName: recipe.name,
          stepName: recipe.steps.length === 1 ? recipe.name : step.name,
          tool: step.tool,
          start: stepStart,
          end: stepEnd
        });
      });
    }
  });

  schedule.sort((a, b) => a.start - b.start);
  return schedule;
}
