export const getTailsString = (assetsAddress = '', max = 4): string => {
    return assetsAddress.length > max * 2
        ? assetsAddress.slice(0, max + 2) + '...' + assetsAddress.slice(-max)
        : assetsAddress;
};
