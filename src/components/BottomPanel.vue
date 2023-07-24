<template>
  <div class="bottom-panel" id="bottom-panel">
    <a href="/" class="nav-item">Home</a>
    <a href="/items" class="nav-item">Items</a>
    <a href="/log" class="nav-item">Inventory Log</a>
    <a href="/vendors" class="nav-item">Vendors</a>
  </div>
</template>

<style scoped>
.bottom-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  box-shadow: 0 0 10px 0 rgb(121, 112, 112);
  z-index: 3000;
}

.nav-item {
  font-family: 'Rubik', sans-serif;
  flex: 1 1 auto;
  /* margin: 0 80px; */
  padding: 15px;
  color: #202124;
  width: 70px;
  opacity: 80%;
  text-decoration: none;
  text-align: center;
}

.nav-item:hover {
  background-color: #c8c8c8;
  color: #202124;
  transition: background-color 0.5s;
}
</style>
