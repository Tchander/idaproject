<template>
  <div class="ida-container">
    <add-product />
    <product-list />
  </div>
</template>

<script>
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";
export default {
  name: "Home",
  components: { ProductList, AddProduct },
};
</script>

<style lang="scss" scoped>
.ida-container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  @media (max-width: 1263px) {
    max-width: 1263px;
  }
  @media (max-width: 959px) {
    max-width: 959px;
  }
  @media (max-width: 599px) {
    max-width: 599px;
    flex-direction: column;
  }
  @media (max-width: 319px) {
    max-width: 319px;
  }
}
</style>
