<template>
  <div class="ida-product-content">
    <filter-button />
    <div class="ida-product-list">
      <product-item
        class="ida-product-item"
        v-for="(product, index) in products"
        :key="index"
        v-bind:product="product"
      />
    </div>
  </div>
</template>

<script>
import FilterButton from "./FilterButton";
import ProductItem from "./ProductItem";
import { mapGetters } from "vuex";
export default {
  name: "ProductList",
  components: { ProductItem, FilterButton },
  computed: {
    ...mapGetters("products", ["products"]),
  },
};
</script>

<style lang="scss" scoped>
.ida-product-content {
  width: 100%;
  padding-left: 16px;
  .ida-product-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
    .ida-product-item {
      display: flex;
      flex-direction: column;
      flex: 0 1 33.333%;
      padding: 0 8px;
      margin-bottom: 16px;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04),
        0 6px 10px rgba(0, 0, 0, 0.02);
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
    }
  }
}
</style>
