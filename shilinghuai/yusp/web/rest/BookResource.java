package cn.com.yusys.yusp.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cn.com.yusys.yusp.commons.service.CommonService;
import cn.com.yusys.yusp.commons.web.rest.CommonResource;
import cn.com.yusys.yusp.domain.Book;
import cn.com.yusys.yusp.service.BookService;

/**
 * @项目名称: Book模块
 * @类名称: BookResource
 * @类描述: #资源类
 * @功能描述: 
 * @创建人: shilinghuai
 * @创建时间: 2019-03-29 11:12:49
 * @修改备注: 
 * @修改记录: 修改时间    修改人员    修改原因
 * -------------------------------------------------------------
 * @version 1.0.0
 * @Copyright (c) 2017宇信科技-版权所有
 */
@RestController
@RequestMapping("/api/book")
public class BookResource extends CommonResource<Book, String> {
    @Autowired
    private BookService bookService;

    @Override
    protected CommonService getCommonService() {
        return bookService;
    }

}
