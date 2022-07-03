<template>
  <div class="card modalwin">
    <h2 class="modalwin__header text-center">Данные пользователя:</h2>
    <div class="modalwin__name text-center">Тимур Евгажуков</div>
    <ul class="modalwin__list">
      <li>
        <input type="text" class="form-control">
      </li>
      <li>
        <input type="text" class="form-control">
      </li>
      <li>
        <input type="text" class="form-control">
      </li>
      <li>
        <input type="text" class="form-control">
      </li>
      <li>
        <input type="text" class="form-control">
      </li>
    </ul>
    <Button class="modalwin__btn-save btn-primary btn-info">Сохранить</Button>
    <Button class="btn-primary">Закрыть</Button>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
export default {
  name: "ModalWin",
  components: {
    Button,
  },
}
</script>

<style lang="scss" scoped>
  .modalwin {
    position: absolute;
    width: 350px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 25px;
    &__header{
      font-size: 18px;
    }
    &__name{
      font-size: 16px;
      margin-bottom: 25px;
    }
    &__list{
      list-style: none;
      padding: 0;
      margin: 0;
      li{
          margin-bottom: 15px;
        &:last-child{
          margin-bottom: 30px;
        }
      }
    }
    &__btn-save{
      margin-bottom: 10px;
    }
  }
</style>