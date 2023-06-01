<template lang="">
    <div class="historyMainDiv">
        <div class="sidebar">
                <v-btn
                href="https://github.com/eddi-study/kdt1-study-3-team4-front"
                target="_blank"
                text>
                <span class="mr-2" style="color: #000;" align="center">Front</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn> <br>
            <v-btn
                href="https://github.com/eddi-study/kdt1-study-3-team4-back"
                target="_blank"
                text>
                <span class="mr-2" style="color: #000;" align="center">Back</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn><br>
      </div>
        <h3>주문 조회</h3>
        <table style="margin: 15px auto;">
            <tr class="historyLine">
                <th align="center" width="80em">주문번호</th>
                <th align="center" width="700em">상품명</th>
                <th align="center" width="100em">가격</th>
                <th align="center" width="200em">주문정보</th>
                <th align="center" width="100em">배송정보</th>
                <th align="center" width="100em">주문날짜</th>
            </tr>
            <tr v-if="!orders || (Array.isArray(orders) && orders.length === 0)">
                <td class="notList" colspan="4" align="center">
                    구매하신 조회내역이 없습니다.
                </td>
            </tr> 
            <tr class="historyItem" v-else v-for="order in orders" :key="order.orderId" @click="handleOrderClick(order.orderId)">
                <td align="center">                
                    {{ order.orderId }}
                </td>
                <td align="center">
                    {{ order.product.productName }}
                </td>
                <td align="center">
                    {{ order.product.productPrice }}
                </td>
                <td align="center">
                    {{ getOrderStatusText(order.orderStatus) }}
                </td>
                <td align="center">
                    {{ getDeliveryStatusText(order.deliveryStatus) }}
                </td>
                <td align="center">
                    {{ order.createDate }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import router from '@/router';

export default {
    props: {
        orders: {
            type: Array
        }
    },
    methods: {
        handleOrderClick(orderNo) {
            router.push(`/order-read-page/${orderNo}`)
        },
        getDeliveryStatusText(deliveryStatus) {
            if (deliveryStatus === "0") {
                return "준비중";
            } else if (deliveryStatus === "1") {
                return "배송준비";
            } else if (deliveryStatus === "2") {
                return "배송중";
            } else if (deliveryStatus === "3") {
                return "배송완료";
            } else {
                return "";
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
}
</script>

<style scoped>
th {
    padding: 4px;
}

h3 {
    display: flex;
    justify-content: center;
    padding: 10px;
}

.historyLine {
    justify-content: center;
    border-bottom: 1px solid #ddd;
    height: 10px;
}

table {
    border-collapse: collapse;
    padding: 20px;
}

.mr-2 {
    padding-right: 0px;
}

.sidebar {
    box-shadow: 3px 3px 3px 0px #949494a4;
    padding: 5px 1.5px 20px 1.5px;
    background-color: rgba(247, 247, 247, 0.89);
    position: fixed;
    right: 30px;
    border-radius: 20px 20px 20px 20px;
    z-index: 1;
    text-align: center;
    top: 150px;
}

.notList {
    color: rgba(138, 138, 138, 0.767);
}

.historyItem:hover {
    cursor: pointer;
    background-color: rgb(156, 201, 253);
}</style>