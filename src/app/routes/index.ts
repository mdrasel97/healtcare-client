import { Router } from "express";
import { SpecialtyRoute } from "../module/specialty/specialty.route";
import { authRoutes } from "../module/auth/auth.route";
import { userRoutes } from "../module/user/user.route";

const router = Router()


router.use("/auth", authRoutes)
router.use("/specialties", SpecialtyRoute)
router.use("/users", userRoutes)

export const IndexRoutes = router