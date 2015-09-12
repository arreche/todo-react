import $ from 'jquery';

export default class HttpClient {
    
    // GET(`/blabla/$(feafea)/gfeah`)
    GET(url, queryParams) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                data: queryParams,
                success: resolve,
                error: reject,
                traditional: true
            });
        });
    }
    
    POST(url, data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method : 'POST',
                url: url,
                data: data,
                success: resolve,
                error: reject,
                traditional: true
            });
        });
    }
    
    PUT(url, data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method : 'PUT',
                url: url,
                data: data,
                success: resolve,
                error: reject,
                traditional: true
            });
        });
    }
    
    DELETE(url, data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method : 'DELETE',
                url: url,
                data: data,
                success: resolve,
                error: reject,
                traditional: true
            });
        });
    }
}