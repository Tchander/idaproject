<template>
  <div v-if="product">
    <img
      class="ida-product-item__image"
      :src="product.image"
      alt="Ссылка неккоректна"
    />
    <div class="ida-product-item__content">
      <div class="ida-product-item__content-name">{{ product.name }}</div>
      <div class="ida-product-item__content-description">
        {{ product.description }}
      </div>
      <div class="ida-product-item__content-price">
        {{ product.price }} руб.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.ida-product-item__image {
  width: 100%;
  height: 200px;
}
.ida-product-item__content {
  background-color: #fffefb;
  padding: 12px 16px 24px 16px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  .ida-product-item__content-name {
    color: #3f3f3f;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 16px;
  }
  .ida-product-item__content-description {
    color: #3f3f3f;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 34px;
    flex: 1 1 auto;
  }
  .ida-product-item__content-price {
    color: #3f3f3f;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
