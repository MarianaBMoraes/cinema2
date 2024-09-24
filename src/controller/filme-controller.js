import Filme from "../models/filme-model"

export const store = async (req, res) => {
  try {
    await Filme.create(req.body);
    res.status(201).json();
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    await Filme.create(req.body);
    res.status(201).json();
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    await Filme.FindById(req.params.id);
    res.status(200).json();
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    await Filme.FindByIdAndUpdate(req.params.id, req.body, {new:true} );
    res.status(201).json();
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    await Filme.FindByIdAndDelete(req.params.id);
    res.status(201).json();
  } catch (error) {
    res.status(400).send(error);
  }
};
