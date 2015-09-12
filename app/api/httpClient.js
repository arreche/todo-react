import $ from 'jquery';

export default class HttpClient {
    
    GET(url, queryParams) {
        return _buildRequest({
            method: 'GET',
            url: url,
            data: queryParams
        });
    }
    
    POST(url, data) {
        return _buildRequest({
            method: 'POST',
            url: url,
            data: data
        });
    }
    
    PUT(url, data) {
        return _buildRequest({
            method: 'PUT',
            url: url,
            data: data
        });
    }
    
    DELETE(url, data) {
        return _buildRequest({
            method: 'DELETE',
            url: url,
            data: data
        });
    }
    
    _buildRequest(url, method, data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: method,
                url: url,
                data: data,
                success: resolve,
                error: reject,
                traditional: true
            });
        });
    }
}