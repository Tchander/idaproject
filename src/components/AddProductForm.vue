<template>
  <form class="ida-product__form" @submit.prevent="">
    <div
      class="ida-product__form-section"
      :class="{ 'error-message': errors.name === true }"
    >
      <label class="ida-product__form-section_label" for="product-name"
        >Наименование товара</label
      >
      <input
        class="ida-product__form-section_input"
        :class="{ 'error-border': errors.name === true }"
        type="text"
        id="product-name"
        placeholder="Введите наименование товара"
        v-model="product.name"
      />
    </div>
    <div class="ida-product__form-section">
      <label class="ida-product__form-section_label optional-label"
        >Описание товара</label
      >
      <textarea
        class="ida-product__form-section_input textarea"
        id="product-description"
        placeholder="Введите описание товара"
        v-model="product.description"
      ></textarea>
    </div>
    <div
      class="ida-product__form-section"
      :class="{ 'error-message': errors.image === true }"
    >
      <label class="ida-product__form-section_label" for="product-image-link"
        >Ссылка на изображение товара</label
      >
      <input
        class="ida-product__form-section_input"
        :class="{ 'error-border': errors.image === true }"
        type="text"
        id="product-image-link"
        placeholder="Введите ссылку"
        v-model="product.image"
      />
    </div>
    <div
      class="ida-product__form-section"
      :class="{ 'error-message': errors.price === true }"
    >
      <label class="ida-product__form-section_label" for="product-price"
        >Цена товара</label
      >
      <input
        class="ida-product__form-section_input"
        :class="{ 'error-border': errors.price === true }"
        @blur="changePriceMask"
        type="text"
        id="product-price"
        placeholder="Введите цену"
        v-model="product.price"
      />
    </div>
    <button
      class="ida-product__form-btn"
      :class="{
        'success-button':
          product.name !== '' && product.image !== '' && product.price !== '',
      }"
      @click="addNewProduct"
    >
      Добавить товар
    </button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AddProductForm",
  data() {
    return {
      product: {
        id: null,
        name: "",
        description: "",
        image: "",
        price: "",
      },
      errors: {
        name: false,
        image: false,
        price: false,
      },
    };
  },
  computed: {
    ...mapGetters("products", ["idCounter"]),
  },
  methods: {
    ...mapActions("products", ["addProduct", "incrementId"]),
    changePriceMask() {
      this.product.price = this.product.price.replace(
        /(\d)(?=(\d\d\d)+([^\d]|$))/g,
        "$1 "
      );
    },
    addNewProduct() {
      if (
        this.product.name !== "" &&
        this.product.image !== "" &&
        this.product.price !== ""
      ) {
        this.product.id = this.idCounter;
        this.incrementId();
        this.addProduct(this.product);
        this.product.name = "";
        this.product.description = "";
        this.product.image = "";
        this.product.price = "";
        this.errors.name = false;
        this.errors.image = false;
        this.errors.price = false;
      } else {
        this.errors.name = this.product.name === "";
        this.errors.image = this.product.image === "";
        this.errors.price = this.product.price === "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ida-product__form {
  background: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 19px 24px;
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .ida-product__form-section {
    margin-bottom: 13px;
    position: relative;
    .ida-product__form-section_label {
      position: relative;
      color: #49485e;
      font-size: 10px;
      line-height: 13px;
      letter-spacing: -0.02em;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: -4px;
        display: block;
        width: 4px;
        height: 4px;
        background-color: #ff8484;
        border-radius: 50%;
      }
    }
    .optional-label:after {
      content: none;
    }
    .ida-product__form-section_input {
      width: 100%;
      padding: 14px 16px;
      font-size: 12px;
      line-height: 15.08px;
      border-radius: 4px;
      box-shadow: 0 2px 5px 0 #0000001a;
      &::placeholder {
        color: #b4b4b4;
      }
      &:focus {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
      @media (max-width: 319px) {
        font-size: 10px;
        padding: 8px 10px;
      }
    }
    .textarea {
      resize: none;
      height: 108px;
    }
    .error-border {
      border: 1px solid #ff8484;
    }
  }
  .ida-product__form-btn {
    font-family: "Inter", "Source Sans Pro", sans-serif;
    background-color: #eee;
    color: #b4b4b4;
    width: 100%;
    margin-top: 4px;
    padding: 12px 0;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    border-radius: 10px;
    cursor: not-allowed;
    @media (max-width: 319px) {
      font-size: 10px;
      padding: 10px 0;
    }
  }
  .success-button {
    background-color: #7bae73;
    color: #fff;
    cursor: pointer;
    &:hover {
      color: #eee;
    }
  }
  .error-message:after {
    content: "Поле является обязательным";
    position: absolute;
    top: 62px;
    left: 2px;
    color: #ff8484;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
  }
}
</style>
