import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "adminPage",
  initialState: {
    id1: "AXZYU09342GDGG",
    password1: "aw90xe3bhx2",

    id2 : "WENK92HKBFCKAKJA",
    password2: "kv2dkfdlf322",

    id3: "AJSHFS443JHFJSH",
    password3: "fsdf24dfkjjkf",

    id4: "QEIJWIOJWW242SKD",
    password4 : "dkdsfeof24242kjf4",

    id5: "CSNKJFDI90E98FS",
    password5: "kcjsdkfj32434xkcd",

    id6 : "AKDDW352556GGY",
    password6 : "kvvs353kd34256dk",

    id7: "LKD5748DHFDKLSF",
    password7 : "kbn43433sflklsd",

    id8: "OFHC548645WKDDLS",
    password8: "ss242cksdkl203",

    id9 : "LDFO833HDJHDJA99",
    password9 : "sdjw232sdlk00990",

    id10: "WSDS8833248LSDDLL",
    password10: "ddfghj2424580",

  },

  reducers: {
    initialData: (state, action) => {
      return store;
    },
  },
});

export const itemsAction = adminSlice.actions;
export default adminSlice;
