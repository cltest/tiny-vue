<template>
  <div>
    <div>场景1：分组 + 多选 + 面板可搜索</div>
    <br />
    <tiny-select v-model="value1" multiple filterable :searchable="true">
      <tiny-option-group v-for="group in options3" :key="group.label" :label="group.label" :disabled="!!group.disabled">
        <tiny-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></tiny-option>
      </tiny-option-group>
    </tiny-select>
    <br />
    <br />
    <div>场景2：单选分组</div>
    <br />
    <tiny-select v-model="value2" filterable>
      <tiny-option-group v-for="group in options3" :key="group.label" :label="group.label" :disabled="!!group.disabled">
        <tiny-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></tiny-option>
      </tiny-option-group>
    </tiny-select>
    <br />
    <br />
    <div>场景3：分组 + 多选</div>
    <br />
    <tiny-select v-model="value2" multiple>
      <tiny-option-group v-for="group in options3" :key="group.label" :label="group.label" :disabled="!!group.disabled">
        <tiny-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></tiny-option>
      </tiny-option-group>
    </tiny-select>
    <br />
    <br />
    <div>场景4：分组 + 多选 + 可搜索</div>
    <br />
    <tiny-select v-model="value2" filterable multiple>
      <tiny-option-group v-for="group in options3" :key="group.label" :label="group.label" :disabled="!!group.disabled">
        <tiny-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></tiny-option>
      </tiny-option-group>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption, OptionGroup as TinyOptionGroup } from '@opentiny/vue'

const options3 = ref([
  {
    label: '热门城市',
    disabled: true,
    options: [
      { value: 'Shanghai', label: '上海' },
      { value: 'Beijing', label: '北京' }
    ]
  },
  {
    label: '城市名',
    options: [
      { value: 'Chengdu', label: '成都' },
      { value: 'Shenzhen', label: '深圳' },
      { value: 'Guangzhou', label: '广州' },
      { value: 'Dalian', label: '大连' },
      { value: 'Chongqing', label: '重庆' },
      { value: 'Xianggang', label: '香港' },
      { value: 'Aomen', label: '澳门' },
      { value: 'Wulumuqi', label: '乌鲁木齐' }
    ]
  }
])

const value1 = ref([])
const value2 = ref('')
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
