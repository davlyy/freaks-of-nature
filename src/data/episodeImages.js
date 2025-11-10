const importAll = (requireContext) =>
    requireContext
        .keys()
        .sort()
        .map((key) => {
            const asset = requireContext(key);
            return asset?.default ?? asset;
        });

export const episodeImages = {
    ep1: importAll(require.context("../assets/ep1", false, /\.(png|jpe?g|svg)$/i)),
    ep2: importAll(require.context("../assets/ep2", false, /\.(png|jpe?g|svg)$/i)),
    ep3: importAll(require.context("../assets/ep3", false, /\.(png|jpe?g|svg)$/i)),
    ep4: importAll(require.context("../assets/ep4", false, /\.(png|jpe?g|svg)$/i)),
    ep5: importAll(require.context("../assets/ep5", false, /\.(png|jpe?g|svg)$/i)),
    ep6: importAll(require.context("../assets/ep6", false, /\.(png|jpe?g|svg)$/i)),
    ep7: importAll(require.context("../assets/ep7", false, /\.(png|jpe?g|svg)$/i)),
};

export default episodeImages;

