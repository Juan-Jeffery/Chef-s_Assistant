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

    // 判斷是否為飯類料理（包含「飯」但不包含「炒」）
    const isRiceDish = recipe.name.includes('飯') && !recipe.name.includes('炒');

    if (isPasta) {
      const step1 = recipe.steps[0]; // 煮麵
      const step2 = recipe.steps[1]; // 煮醬
      const step3 = recipe.steps[2]; // 炒麵加醬（如果有）

      // 判斷哪個步驟比較長
      const longerStep = step1.time >= step2.time ? step1 : step2;
      const shorterStep = step1.time < step2.time ? step1 : step2;

      // 取得工具可用時間
      const longerToolAvailable = getToolAvailableTime(longerStep.tool);
      const shorterToolAvailable = getToolAvailableTime(shorterStep.tool);

      // 長步驟先開始
      let longerStart = longerToolAvailable;
      let longerEnd = longerStart + longerStep.time;

      // 短步驟為了同步結束，開始時間 = 同步結束 - 短步驟時間
      let shorterStart = longerEnd - shorterStep.time;

      if (shorterStart < shorterToolAvailable) {
        // 短步驟工具還沒空，調整開始時間與結束時間
        shorterStart = shorterToolAvailable;
        const adjustedEnd = shorterStart + shorterStep.time;
        longerStart = adjustedEnd - longerStep.time;
        longerEnd = adjustedEnd;
      }

      // 加入長步驟
      schedule.push({
        recipeId: id,
        recipeName: recipe.name,
        stepName: longerStep.name,
        tool: longerStep.tool,
        start: longerStart,
        end: longerEnd
      });
      setToolUsage(longerStep.tool, longerEnd);

      // 加入短步驟
      schedule.push({
        recipeId: id,
        recipeName: recipe.name,
        stepName: shorterStep.name,
        tool: shorterStep.tool,
        start: shorterStart,
        end: longerEnd
      });
      setToolUsage(shorterStep.tool, longerEnd);

      // 如果有第三步驟「炒麵加醬」，安排它
      if (step3) {
        const step3ToolAvailable = getToolAvailableTime(step3.tool);
        const step3Start = Math.max(longerEnd, step3ToolAvailable);
        const step3End = step3Start + step3.time;

        schedule.push({
          recipeId: id,
          recipeName: recipe.name,
          stepName: step3.name,
          tool: step3.tool,
          start: step3Start,
          end: step3End
        });
        setToolUsage(step3.tool, step3End);
      }

    } else if (isRiceDish) {
      // 飯類料理排程，平行處理煮飯與主菜，後續依序排
      const cookRiceStep = recipe.steps[0];
      const mainDishStep = recipe.steps[1];

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

      const mainStart = getToolAvailableTime(mainDishStep.tool);
      const mainEnd = mainStart + mainDishStep.time;
      setToolUsage(mainDishStep.tool, mainEnd);
      schedule.push({
        recipeId: id,
        recipeName: recipe.name,
        stepName: mainDishStep.name,
        tool: mainDishStep.tool,
        start: mainStart,
        end: mainEnd
      });

      const prevStepsEnd = Math.max(riceEnd, mainEnd);

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
