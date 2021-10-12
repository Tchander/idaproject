<template>
  <div class="ida-product-filter">
    <select class="ida-product-select">
      <option value="default">По умолчанию</option>
      <option value="max">По возрастанию</option>
      <option value="min">По убыванию</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterButton",
};
</script>

<style lang="scss" scoped>
.ida-product-filter {
  text-align: right;
  margin-bottom: 16px;
}
.ida-product-select {
  background-color: #fffefb;
  color: #b4b4b4;
  padding: 12px 16px;
  font-size: 12px;
  line-height: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}
</style>
