import cartState from "./CartState";

describe ( "Test Cart State Suite", () => {
    it ("default test", () => {
        expect (cartState.items.length).toBe(0)
    })

})


describe ( "Test Cart State Suite", () => {
    beforeEach(()=> {
        cartState.addItem({
            id: 1,
            price: 100
        })
    })

    it ("default test", () => {
        expect (cartState.items.length).toBe(1)
        expect(cartState.amount).toBe(100)
    })

    afterEach( ()=> {
        cartState.empty();
    })

})

