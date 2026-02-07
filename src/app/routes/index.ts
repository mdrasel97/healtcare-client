import { Router } from "express";
import { SpecialtyRoute } from "../module/specialty/specialty.route";
import { authRoutes } from "../module/auth/auth.route";

const router = Router()


router.use("/auth", authRoutes)
router.use("/specialties", SpecialtyRoute)

export const IndexRoutes = router