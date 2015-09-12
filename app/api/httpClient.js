import $ from 'jquery';

export default class HttpClient {
    
    GET(url, queryParams) {
        return this._buildRequest({
            method: 'GET',
            url: url,
            data: queryParams
        });
    }
    
    POST(url, data) {
        return this._buildRequest({
            method: 'POST',
            url: url,
            data: data
        });
    }
    
    PUT(url, data) {
        return this._buildRequest({
            method: 'PUT',
            url: url,
            data: data
        });
    }
    
    DELETE(url, data) {
        return this._buildRequest({
            method: 'DELETE',
            url: url,
            data: data
        });
    }
    
    _buildRequest(args) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: args.method,
                url: args.url,
                data: args.data,
                success: resolve,
                error: reject,
                traditional: true
            });
        });
    }
}