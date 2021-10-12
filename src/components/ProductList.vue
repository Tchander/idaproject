<template>
  <div class="ida-product-content">
    <sort-button @sort-cards="sortCards" />
    <div class="ida-product-list">
      <product-item
        class="ida-product-item"
        v-for="(product, index) in sortedProducts"
        :key="index"
        v-bind:product="product"
      />
    </div>
  </div>
</template>

<script>
import SortButton from "./SortButton";
import ProductItem from "./ProductItem";
import { mapGetters } from "vuex";
export default {
  name: "ProductList",
  components: { ProductItem, SortButton },
  data() {
    return {
      sortValue: "",
    };
  },
  computed: {
    ...mapGetters("products", [
      "productsByDefault",
      "productsByMax",
      "productsByMin",
      "productsByName",
    ]),
    sortedProducts() {
      if (this.sortValue === "default") {
        return this.productsByDefault;
      } else if (this.sortValue === "max") {
        return this.productsByMax;
      } else if (this.sortValue === "min") {
        return this.productsByMin;
      } else if (this.sortValue === "name") {
        return this.productsByName;
      } else {
        return this.productsByDefault;
      }
    },
  },
  methods: {
    sortCards(value) {
      this.sortValue = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.ida-product-content {
  width: 100%;
  max-width: 1028px;
  padding-left: 16px;
  @media (max-width: 599px) {
    padding-left: 0;
  }
  .ida-product-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
    .ida-product-item {
      position: relative;
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
      @media (max-width: 1263px) {
        flex: 0 1 50%;
      }
      @media (max-width: 959px) {
        flex: 0 1 100%;
      }
    }
  }
}
</style>
