<template>
  <div
    class="ida-product-sort__container"
    :class="{ 'ida-product-sort__container--margin': selectActive }"
  >
    <div
      class="ida-product-sort"
      :class="{ 'ida-product-sort--absolute': selectActive }"
      @click="toggleSelector"
    >
      <div
        class="ida-product-sort__selected"
        :class="{ 'ida-product-sort__selected--rotate': selectActive }"
      >
        {{ selectedText }}
      </div>
      <ul class="ida-product-sort__select" v-if="selectActive">
        <li
          v-for="(option, index) in options"
          :key="index"
          class="ida-product-sort__option"
          @click="changeSelectedOption(option)"
        >
          {{ option.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortButton",
  data() {
    return {
      selectActive: false,
      selectedText: "По умолчанию",
      selectedValue: "default",
      options: [
        { value: "default", text: "По умолчанию" },
        { value: "max", text: "По возрастанию" },
        { value: "min", text: "По убыванию" },
        { value: "name", text: "По имени" },
      ],
    };
  },
  methods: {
    toggleSelector() {
      this.selectActive = !this.selectActive;
    },
    changeSelectedOption(option) {
      this.selectedText = option.text;
      this.selectedValue = option.value;
      this.$emit("sort-cards", this.selectedValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.ida-product-sort__container {
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin-bottom: 16px;
  .ida-product-sort {
    background-color: #fffefb;
    color: #b4b4b4;
    min-width: 121.49px;
    padding: 12px 28px 12px 16px;
    font-size: 12px;
    line-height: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .ida-product-sort__selected {
      position: relative;
      &:after {
        content: "";
        background: url("../assets/images/arrow_down.svg") 0 0 no-repeat;
        position: absolute;
        width: 8px;
        height: 8px;
        top: 6px;
        right: -14px;
        transition: transform 0.3s linear;
      }
      &--rotate:after {
        top: 3px;
        transform: rotate(180deg);
      }
    }
    .ida-product-sort__select {
      position: relative;
      .ida-product-sort__option {
        margin-top: 8px;
        margin-right: -16px;
        &:hover {
          color: #3f3f3f;
          font-weight: 600;
        }
        &:before {
          content: "";
          position: absolute;
          top: -4px;
          left: -15.91px;
          width: 121.29px;
          border-bottom: 1px solid #b4b4b4;
        }
      }
    }
    &--absolute {
      position: absolute;
      z-index: 100;
    }
  }
  &--margin {
    margin-bottom: 55px;
  }
}
</style>
