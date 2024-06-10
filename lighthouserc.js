module.exports = {
    ci: {
        collect: {
            //url: ['http://192.168.229.122'],
            url: ['https://aferreira-deo.github.io/jftl/'],
      },
        assert: {
            assertions: {
                'categories:accessibility': ['error', {'minScore': 0.9}]
              }
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};