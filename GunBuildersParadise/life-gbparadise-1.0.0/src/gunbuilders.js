exports.mod = () => {

    let source = require("../source.json");
    logger.logInfo("Caching Gunbuilder's Paradise");

    let base = fileIO.parse(fileIO.read(db.user.cache.items));

    for (let file in base.data) {
        let fileData = base.data[file];
        //removing conflicting items
        if (fileData._props.ItemSound === "mod" || fileData._props.ItemSound === "generic") {
            fileData._props.ConflictingItems = [];
        }
        //adding more mods to slots, starting with AK's 
        //AK100 series, ak74n, ak74m, aks74n
        if (source.guns.ak.includes(fileData._id)) {
            fileData._props.Slots[0]._props.filters[0].Filter = ["56ea9461d2720b67698b456f"];
            fileData._props.Slots[2]._props.filters[0].Filter = ["5448fe394bdc2d0d028b456c"];
            fileData._props.Slots[3]._props.filters[0].Filter = ["55818a684bdc2ddd698b456d"];
            fileData._props.Slots[4]._props.filters[0].Filter = ["55818a304bdc2db5418b457d"];
            fileData._props.Slots[5]._props.filters[0].Filter = ["55818ac54bdc2d5b648b456e"];
            fileData._props.Slots[6]._props.filters[0].Filter = ["55818a594bdc2db9688b456a"];
            fileData._props.Slots[8]._props.filters[0].Filter = ["55818b224bdc2dde698b456f"];
            fileData._props.Slots[9]._props.filters[0].Filter = ["55818a6f4bdc2db9688b456b"];
        }
        //aks74u variants allowing all ak stocks and receivers
        if (source.guns.aks.includes(fileData._id)) {
            fileData._props.Slots[0]._props.filters[0].Filter = ["55818a684bdc2ddd698b456d"];
            fileData._props.Slots[1]._props.filters[0].Filter = ["55818a594bdc2db9688b456a"];
            fileData._props.Slots[2]._props.filters[0].Filter = ["55818a6f4bdc2db9688b456b"];
            fileData._props.Slots[4]._props.filters[0].Filter = ["5448fe394bdc2d0d028b456c"];
            fileData._props.Slots[5]._props.filters[0].Filter = ["55818a304bdc2db5418b457d"];
            fileData._props.Slots[6]._props.filters[0].Filter = ["56ea9461d2720b67698b456f"];
        }
        //ak variants allowing all  ak stocks and receivers
        if (source.guns.akmn.includes(fileData._id)) {
            fileData._props.Slots[0]._props.filters[0].Filter = ["56ea9461d2720b67698b456f"];
            fileData._props.Slots[2]._props.filters[0].Filter = ["5448fe394bdc2d0d028b456c"];
            fileData._props.Slots[3]._props.filters[0].Filter = ["55818a684bdc2ddd698b456d"];
            fileData._props.Slots[4]._props.filters[0].Filter = ["55818a304bdc2db5418b457d"];

            fileData._props.Slots[6]._props.filters[0].Filter = ["55818a594bdc2db9688b456a"];
        }
        //now AR-15's/M4/HK416
        //starting with AR receivers
        if (source.ar.receiver.includes(fileData._id)) {
            fileData._props.Slots[1]._props.filters[0].Filter = ["555ef6e44bdc2de9068b457e"];
            fileData._props.Slots[2]._props.filters[0].Filter = ["55818a104bdc2db9688b4569"];
        }
        //AR variants allowing all ar stocks and receivers
        if (source.ar.gun.includes(fileData._id)) {
            fileData._props.Slots[2]._props.filters[0].Filter = ["55818a304bdc2db5418b457d"];
            fileData._props.Slots[3]._props.filters[0].Filter = ["55818a594bdc2db9688b456a"];
        }
    }
    fileIO.write("user/cache/items.json", base);
    logger.logSuccess("Gun-builders Paradise Acheived!");
}