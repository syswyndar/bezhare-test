const axios = require('axios')

class Controller {
    static async fetchAllBusiness (req, res) {
        try {
            if(req.query.category) {
                let temp = req.query.category.split(',').map(el => String(el))
                req.query.category = temp
            }

            let payload = {
                size: 12,
                page: req.query.page ? +req.query.page : 1,
                listCategory: req.query.category ? req.query.category : []
            }
            
            let allBusiness = await axios({
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  method: 'post',
                  url: 'https://api.bizhare.id/v2/business/parent/all',
                  data: payload
                
            })
            
            res.status(200).json(allBusiness.data)
        } catch (err) {
            console.log(err)
        }
    }

    static async filtering (req, res) {
        try {
            // console.log(req.params.name)
            let payload = {
                size: 12,
                page: 1,
                businessName: req.params.name ? req.params.name : ''
            }
            let allBusiness = await axios({
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  method: 'post',
                  url: 'https://api.bizhare.id/v2/business/parent/all',
                  data: payload
                
            })
            
            res.status(200).json(allBusiness.data)
        } catch (err) {
            console.log(err)
        }
    }
    static async fetchCategories(req, res) {
        try {
            let categories = await axios({
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  method: 'get',
                  url: 'https://api.bizhare.id/v2/media/param/value?s=getSubjectValue&p=businessCategory',  
            })
            
            res.status(200).json(categories.data)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = Controller