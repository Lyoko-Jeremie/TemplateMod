// 转发模式：以给游戏clothingSlotToIconName函数增加新逻辑为例

// 保存游戏原始函数实现留待后用 ， 可用于debug或是恢复游戏原始逻辑
window.MyMod_Old_clothingSlotToIconName = window.clothingSlotToIconName;
// 新的函数实现，需要保持参数和返回值与游戏原始实现一致或兼容
function MyMod_NewClothingSlotToIconName(slotName, outfits) {
  switch (slotName) {
    // 新函数添加的逻辑 ， 或者覆盖原始函数的逻辑
    case "AAAAA":
      return "AAAAA";
    case "BBBBB":
      return "BBBBB";
    default:
      // 把我们不需要处理的情况转发回游戏的原始函数实现，让游戏原始逻辑处理剩下的我们不处理的情况
      // 这个地方调用的就是上面保存的游戏原始函数实现
      return window.MyMod_Old_clothingSlotToIconName(slotName, outfits);
  }
}
// 将新函数实现覆盖原始函数，这样其他mod或者游戏本身的逻辑就会调用新的函数实现
window.clothingSlotToIconName = MyMod_NewClothingSlotToIconName;

// 记得将以上的 `MyMod` 换成你的mod的名字， 避免mod和mod之间互相冲突
// 这个文件需要以全新的名字添加到scriptFileList中，最好以 `你的mod的名字+下划线+文件作用.js` 作为文件名

