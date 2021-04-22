<template>
  <div>
    <form action="/book/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" id="file" value="" multiple="multiple" />
      <input type="submit" value="提交"/>
    </form>
  </div>
</template>
