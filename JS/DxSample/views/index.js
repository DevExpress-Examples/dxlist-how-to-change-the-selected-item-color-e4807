DxSample.Index = function (params) {
    var viewModel = {
        selectedID: ko.observable(0),

        getColor: function (itemID) {
            return this.selectedID() == itemID ? 'Blue' : 'White';
        },
        itemClicked: function (e) {
            viewModel.selectedID(e.model.id);
        },

        dataSource: [
                { id: 1, name: "Bob", hire: 2005 },
                { id: 2, name: "John", hire: 2007 },
                { id: 3, name: "Frank", hire: 2001 },
                { id: 4, name: "Robert", hire: 2007 },
        ]
    };
    return viewModel;
};