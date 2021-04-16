<template>
<!-- 画像アップロードボタン -->
  <div>
    <div class="inputArea" ref="inputArea">
      <b-button v-b-modal.upload class="ml-1">画像アップロード</b-button>
      <b-modal
        id="upload"
        title="画像アップロード"
        @ok="handleOk"
        @cancel="$v.$reset"
      >
        <b-form ref="form" @submit.stop.prevent="viewImage">
          <b-form-group
            id="example-input-group-1"
            label="画像を選択してください"
          >
            <b-form-file
              id="image"
              accept="image/jpeg, image/png"
              v-model="$v.form.uploadedImage.$model"
              :state="validateState('uploadedImage')"
              aria-describedby="input-1-live-feedback"
            ></b-form-file>
            <b-form-invalid-feedback id="input-1-live-feedback"
              >画像をアップしてください</b-form-invalid-feedback
            >
          </b-form-group>
        </b-form>
      </b-modal>
    </div>
    <!-- アップした画像を表示 -->
    <div>
      <div class="viewArea">
        <img
          class="image"
          ref="image"
          :src="uploadedImageSrc"
          alt=""
        />
      </div>
        </div>
      </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      uploadedImageSrc: "",
      form: {
        uploadedImage: null,
      },
    };
  },
  validations: {
    form: {
      uploadedImage: {
        required,
      },
    },
  },
  methods: {
    // 入力された画像をセット
    setImage() {
      new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(this.form.uploadedImage);
        reader.onload = (e) => {
          this.uploadedImageSrc = e.target.result;
          const image = new Image();
          image.src = e.target.result;
          resolve(image);
        };
      })
    },
    validateState(data) {
      const { $dirty, $error } = this.$v.form[data];
      return $dirty ? !$error : null;
    },
    // バリデーションにかけて入力された画像を表示
    viewImage() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.setImage();
      this.$nextTick(() => {
        this.$bvModal.hide("upload");
      });
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.viewImage();
    },
  },
};
</script>

<style scoped>
.inputArea {
  width: 100%;
  padding: 20px;
}

.viewArea {
  width: 100%;
}

.viewArea > img {
  width: 100%;
}
</style>
