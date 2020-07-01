use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet() {
    let msg = "Hello World";
    log!("{}", msg);
}
