<template>
<div class="table-responsive">
    <table class="table table-bordered">
        <thead>
            <slot name="header"></slot>
        </thead>
        <slot name="body"></slot>
    </table>
</div>
</template>

<script>
export default {
    name: 'TableMain',
}
</script>
