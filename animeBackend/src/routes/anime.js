const express = require("express");
const router = express.Router();
const {getAllAnime, getAnime} = require("../controllers/get-controllers");
const createAnime = require("../controllers/createAnime");
const updateAnime = require("../controllers/updateAnime");
const deleteAnime = require("../controllers/deleteAnime");



router.get("/", getAllAnime)

router.post("/", createAnime)

router.get("/:id", getAnime)

router.patch("/:id", updateAnime)

router.delete("/:id", deleteAnime )

module.exports= router