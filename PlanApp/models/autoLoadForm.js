// 监听了文档加载完成事件，并对其注册了执行的函数
document.addEventListener("DOMContentLoaded",function(){
    const typeSelector = document.getElementById("type-selector")   //取得select对象，方便对其注册事件监听器
    const targetContainer = document.getElementById("target-container")    //取得动态目标类型的容器，以便appendChild
    const targetText = document.getElementById("target");

    // 内容数据
    const targetTypeData = {
        countable:{min : "至少",max : "至多",hint : "例如：喝几杯水、抽几根烟"},
        time:     {min : "最早",max : "最晚",hint : "例如：几点起床、几点睡觉"}
    };

    // 监听类型选择标签的改动事件
    typeSelector.addEventListener("change",function(){
        // 清空target选择容器和target文本框提示文本
        targetContainer.innerHTML = '';
        targetText.placeholder = '';
        const selectedCategory = this.value;
        const item = targetTypeData[selectedCategory];                
        // 根据需要创建一个标签
        if(item) {
            const targetTypeLabel = document.createElement('label');
            targetTypeLabel.for = "target-selector";
            targetTypeLabel.innerHTML = "目标类型:"
            // 创建选择器
            const targetTypeSelector = document.createElement("select");
            targetTypeSelector.id = "target-selector";
            targetTypeSelector.className = "custom-selector";
            targetTypeSelector.innerHTML = `
                <option value="min">${item.min}</option>
                <option value="max">${item.max}</option>
            `;
            targetText.placeholder = item.hint;
            targetContainer.appendChild(targetTypeLabel);
            targetContainer.appendChild(targetTypeSelector);
        }
    })
}
)