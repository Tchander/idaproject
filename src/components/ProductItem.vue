<template>
  <div
    v-if="product"
    @mouseover="showDeleteButton = true"
    @mouseleave="showDeleteButton = false"
  >
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
    <div
      v-if="showDeleteButton"
      class="ida-product-item__delete"
      @click="deleteCard"
    >
      <img
        class="ida-product-item__delete-image"
        src="../assets/images/deleteButton.svg"
        alt="Delete"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductItem",
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      showDeleteButton: false,
    };
  },
  methods: {
    ...mapActions("products", ["deleteProduct"]),
    deleteCard() {
      this.deleteProduct(this.product.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.ida-product-item__image {
  width: 100%;
  height: auto;
}
.ida-product-item__content {
  background-color: #fffefb;
  padding: 12px 16px 24px 16px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  @media (max-width: 599px) {
    padding: 8px;
  }
  .ida-product-item__content-name {
    color: #3f3f3f;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 16px;
    @media (max-width: 599px) {
      margin-bottom: 8px;
    }
  }
  .ida-product-item__content-description {
    color: #3f3f3f;
    word-break: break-all;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 34px;
    flex: 1 1 auto;
    @media (max-width: 599px) {
      margin-bottom: 20px;
    }
  }
  .ida-product-item__content-price {
    color: #3f3f3f;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
}
.ida-product-item__delete {
  position: absolute;
  top: -8px;
  right: -8px;
  .ida-product-item__delete-image {
    width: 32px;
    height: 32px;
  }
}
</style>
