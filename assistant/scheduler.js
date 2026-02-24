// 直接定義函數，不要寫 import，也不要寫 <script> 標籤
function scheduleRecipes(selectedIds, availableTools) {
  let schedule = [];
  let toolNextAvailableTime = {}; 
  
  availableTools.forEach(tool => toolNextAvailableTime[tool] = 0);
  if (!toolNextAvailableTime['無鍋具']) toolNextAvailableTime['無鍋具'] = 0;

  let allSteps = [];
  selectedIds.forEach(id => {
    // 這裡的 recipes 變數會從全域環境（載入 recipes.js 後）自動取得
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;
    
    recipe.steps.forEach((step, index) => {
      allSteps.push({
        ...step,
        recipeId: id,
        recipeName: recipe.name,
        stepIndex: index
      });
    });
  });

  allSteps.sort((a, b) => a.recipeId - b.recipeId || a.stepIndex - b.stepIndex);

  allSteps.forEach(step => {
    const tool = step.tool || '無鍋具';
    let startTime = 0;

    if (step.dependsOn !== undefined) {
      const prevStep = schedule.find(s => s.recipeId === step.recipeId && s.stepIndex === step.dependsOn);
      if (prevStep) startTime = prevStep.end;
    }

    const toolReadyTime = toolNextAvailableTime[tool] || 0;
    const finalStart = Math.max(startTime, toolReadyTime);
    const finalEnd = finalStart + step.time;

    toolNextAvailableTime[tool] = finalEnd;

    schedule.push({
      recipeId: step.recipeId,
      recipeName: step.recipeName,
      stepName: step.name,
      tool: tool,
      start: finalStart,
      end: finalEnd,
      stepIndex: step.stepIndex
    });
  });

  return schedule.sort((a, b) => a.start - b.start);
}