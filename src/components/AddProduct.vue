<template>
  <div class="ida-product">
    <div class="ida-product__title">Добавление товара</div>
    <add-product-form />
  </div>
</template>

<script>
import AddProductForm from "./AddProductForm";
export default {
  name: "AddProduct",
  components: { AddProductForm },
};
</script>

<style lang="scss" scoped>
.ida-product {
  width: 100%;
  max-width: 332px;
  .ida-product__title {
    color: #3f3f3f;
    font-size: 28px;
    font-weight: 600;
    line-height: 35.2px;
    margin-bottom: 20px;
  }
}
</style>
