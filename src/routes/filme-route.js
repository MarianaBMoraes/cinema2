import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy,
} from "../controller/filme-controller";

const router = Router();

router.post("/", store);
router.get("/", index);
router.get("/ :id", show);
router.update("/ :id", update);
router.delete("/ :id", destroy);

export default router;
