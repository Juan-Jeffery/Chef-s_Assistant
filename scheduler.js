import { recipes } from './recipes.js';

export function scheduleRecipes(selectedIds, availableTools) {
  let schedule = [];
  let toolNextAvailableTime = {}; // 記錄各個鍋具的下個空檔
  
  // 初始化所有鍋具的可用時間為 0
  availableTools.forEach(tool => toolNextAvailableTime[tool] = 0);
  if (!toolNextAvailableTime['無鍋具']) toolNextAvailableTime['無鍋具'] = 0;

  // 1. 取得所有步驟並展開
  let allSteps = [];
  selectedIds.forEach(id => {
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

  // 2. 排序：優先處理耗時長或有依賴關係的步驟（類似於最長路徑優先）
  // 這裡簡單採用 recipeId 排序，確保同一道菜的步驟連續性
  allSteps.sort((a, b) => a.recipeId - b.recipeId || a.stepIndex - b.stepIndex);

  // 3. 模擬排程邏輯
  allSteps.forEach(step => {
    const tool = step.tool || '無鍋具';
    let startTime = 0;

    // A. 檢查前置步驟依賴
    if (step.dependsOn !== undefined) {
      const prevStep = schedule.find(s => s.recipeId === step.recipeId && s.stepIndex === step.dependsOn);
      if (prevStep) startTime = prevStep.end;
    }

    // B. 檢查鍋具資源可用時間
    const toolReadyTime = toolNextAvailableTime[tool] || 0;
    
    // 最終開始時間是「前置完成」與「鍋具準備好」的較晚者
    const finalStart = Math.max(startTime, toolReadyTime);
    const finalEnd = finalStart + step.time;

    // C. 更新鍋具狀態
    toolNextAvailableTime[tool] = finalEnd;

    // D. 存入排程
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