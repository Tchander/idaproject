<template>
  <div>
    <filter-button />
    <div>
      <product-item />
    </div>
  </div>
</template>

<script>
import FilterButton from "./FilterButton";
import ProductItem from "./ProductItem";
export default {
  name: "ProductList",
  components: { ProductItem, FilterButton },
};
</script>

<style lang="scss" scoped></style>
