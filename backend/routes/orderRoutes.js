import express from "express"
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  UpdateOrderToPaid,
  getOrders,
  UpdateOrderToDelivered,
} from "../controllers/orderController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders)
router.route("/myorders").get(protect, getMyOrders)
router.route("/:id").get(protect, getOrderById)
router.route("/:id/pay").put(protect, UpdateOrderToPaid)
router.route("/:id/deliver").put(protect, UpdateOrderToDelivered)

router.route("/myorders").get(protect, getMyOrders)

export default router
