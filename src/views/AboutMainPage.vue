<template>
  <div class="container">
    <img
      src="https://www.appsheet.com:443/fsimage.png?appid=59e436dd-c035-4089-b906-3b1d28fdd2dd&datasource=google&filename=DocId%3D18ddbYWpxQhHGBNj4tY8uVC_4moFpZ7Ff&signature=7eb4c1c1faf0c15e5fd798c1a445c50d05a296e048a7863eb56a774746e8f050&tableprovider=google&userid=2078346"
      alt="img-icon"
    />
    <div class="text">
      <h1>Inventory Management</h1>
      <h2>Manage inventory levels, stock value and vendor details</h2>
      <button id="ok-button" @click="$router.back()">Go Back</button>
    </div>
  </div>
</template>

<style scoped>
button {
  width: 140px;
  height: 40px;
  background-color: #4891db;
  border: 0;
  font-family: 'Rubik', sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 10px;
  position: relative;
  display: block;
  margin: calc(50vh - 120px) auto 10px;
}

button:hover {
  box-shadow: 0 3px 3px rgb(155, 154, 154);
  transition: box-shadow 0.2s;
  cursor: pointer;
}

.container {
  width: max-content;
  flex-direction: row;
  position: relative;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10%;
}

.text {
  display: flex;
  flex-direction: column;
}

h1 {
  font-family: 'Rubik', sans-serif;
  position: relative;
  font-weight: bold;
  font-size: 20px;
}

h2 {
  margin-top: -2px;
  font-family: 'Rubik', sans-serif;
  position: relative;
  font-weight: bold;
  font-size: 17px;
}

img {
  position: relative;
}

@media only screen and (max-width: 890px) {
  img {
    width: 100px;
    height: 100px;
  }

  .container {
    width: 60vw;
  }
}
</style>
