<template>
    <div>
      <table>
          <table style="margin: auto;">
              <thead>
                  <tr>
                      <td>주문번호:</td>
                      <td>
                          <input type="text" :value="order.orderId" readonly/>
                      </td>
                  <tr>    
                      <td>상품이름:</td>
                      <td>
                          <input type="text" :value="order.product?.productName" readonly/>
                      </td>
                      <td>가격:</td>
                      <td>
                          <input type="text" :value="order.product?.productPrice" readonly/>
                      </td>
                      <td>주문정보:</td>
                      <td>
                        <input type="text" :value="getOrderStatusText(order.orderStatus)" readonly />
                      </td>
                  </tr>    
                  </tr>
              </thead>
          </table>
          <table>   
              <tbody>
                  <tr>        
                      <td>
                          <div  style="margin-top: 10px;">
                            <img v-if="order.product" :src="getImagePath(order.product?.image_resource_path[0])" style="width: 50%; height: 100%;"/>
                            <div v-else style="width: 100%; height: 100%;">12</div>
                        </div>
                      </td>
                  </tr>
              </tbody>
          </table> 
          <!-- 상품 정보 대신 사진넣기 -->
          <table style="margin: auto;">   
              <tbody>
                  <tr>
                      <td>
                          <div style="margin-top: 10px;"></div>
                          <textarea cols="80" rows="10" :value="order.productDetails" readonly/>
                      </td>
                  </tr>
              </tbody>
          </table> 
          <!-- 상품 정보 대신 사진넣기 -->
          <table style="margin: auto;">
              <tfoot>
                  <tr>
                      <td>제조사:</td>
                      <td>
                          <input type="text" :value="order.product?.vendor" readonly/>
                      </td> 
                      <td>구매일자:</td>
                      <td>
                          <input type="text" :value="order.createDate" readonly/>
                      </td>
                      <td>배송정보:</td>
                      <td>
                        <input type="text" :value="getDeliveryStatusText(order.deliveryStatus)" readonly/>
                      </td>
                  </tr>
              </tfoot>
          </table>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
          apiUrl: process.env.VUE_APP_API_URL,
        }
    },
      name: "OrderReadForm",
      props: {
          order: {
              type: Object,
              required: true,
          }
      },
    watch: {
        order: {
            immediate: true,
            handler() {
                this.loaded = true;
            },
        },
    },
      methods: {
        getImagePath(imagePath) {
        return this.apiUrl + imagePath;
        },
        getDeliveryStatusText(deliveryStatus) {
        if (deliveryStatus === '0') {
        return '준비중';
        } else if (deliveryStatus === '1') {
        return '배송준비';
        } else if (deliveryStatus === '2') {
        return '배송중';
        } else if (deliveryStatus === '3') {
        return '배송완료';
        } else {
        return deliveryStatus;
        }
        },
        getOrderStatusText(orderStatus) {
        if (orderStatus === "-1") {
            return "취소";
        } else if (orderStatus === "1") {
            return "상품준비중";
        } else if (orderStatus === "2") {
            return "완료";
        } else {
            return "";
        }
        }
  
    },
    created () {
        //this.getImagePath();
    }
  
  }
  </script>
     
  <style>
      /* table {
              border: 1px solid black;
          } */
      textarea {
          /* border: 1px solid black; */
          display: block;
          overflow-y: scroll;
          background-color: rgb(235, 233, 233);
      }
      table {
          border-collapse: collapse;
      }
      td, tr {
          padding: 5px;
      }
  </style>