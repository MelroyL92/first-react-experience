export const compareSoldItems = (item1,item2) => {
    return item2.sold - item1.sold;
}

export const comparePrice = (item1,item2) => {
    return item1.price - item2.price;
}

export const compareRefresh = (item1,item2) => {
    return item2.refreshRate - item1.refreshRate;
}