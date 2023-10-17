let example = {
  css: `/*
<div class="tab">
  <div class="tab-head">
    <div class="tab-head-item"><label for="tab_body_item_switch_0">tab-head-item 0</label></div>
    <div class="tab-head-item"><label for="tab_body_item_switch_1">tab-head-item 1</label></div>
    <div class="tab-head-item"><label for="tab_body_item_switch_2">tab-head-item 2</label></div>

  </div>

  <div class="tab-body">
    <input class="tab-body-item-switch" type="radio" name="tab_body_item_switch" id="tab_body_item_switch_0" checked />
    <div class="tab-body-item">tab-body-item 0 content</div>
    <input class="tab-body-item-switch" type="radio" name="tab_body_item_switch" id="tab_body_item_switch_1" />
    <div class="tab-body-item"><h1>Heading 1</h1><textarea>textarea content</textarea></div>
    <input class="tab-body-item-switch" type="radio" name="tab_body_item_switch" id="tab_body_item_switch_2" />
    <div class="tab-body-item"><p>Paragraph</p><button>button content</button></div>
  </div>
</div>
*/
.tab {
  height: 100% ;
  line-height: 20px ;
  }
  .tab-head {
    overflow-x: auto ;
    white-space: nowrap }
    .tab-head::-webkit-scrollbar {
      display: none ;
    }
    .tab-head-item {
      border: 1px solid orange ;
      border-bottom: 0 ;
      border-left: 0 ;
      display: inline-block ;
      padding: 5px 10px ;
      margin-left: -5px }
      .tab-head-item:first-child {
        margin-left: 0 ;
        border-left: 1px solid orange ;
      }
  .tab-body {
    border: 1px solid orange ;
    height : 100% ;
    padding: 10px ;
    }
    .tab-body-item-switch {
      display: none ;
      }
    .tab-body-item {
      display: none }
      .tab-body-item-switch:checked + .tab-body-item {
        display: block ;
      }`
}