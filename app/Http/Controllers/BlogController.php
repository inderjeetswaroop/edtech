<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\BlogcatRequest;
use App\Http\Requests\BlogRequest;
use App\Models\Blog;
use App\Models\Tag;
use App\Models\Blogsubject;
use App\Models\Blogcategory;
use App\Models\Dailymcqdate;
use App\Models\Dailymcqquest;

class BlogController extends Controller
{
    public function singleCatInfo($catid)
    {
        return Blogcategory::find($catid)->toJson();
    }
    public function blogcatSetting()
    {
        
        $pageTitle = "Be and By Article Category List";
    	return view("admin.blogcatList")->with(["pageTitle"=>$pageTitle,]);
        
    }
    public function blocatList()
    {
        return Blogcategory::orderBy("created_at","desc")->get()->toJson();
    }
    
    public function homepageblogcat()
    {
        return Blogcategory::where("showOnHome",1)->orderBy("created_at","desc")->get()->toJson();
    }
    public function ncertCat()
    {
        return Blogcategory::where("ncert",1)->get()->toJson();
    }
    public function preyearQuestPapercat()
    {
        return Blogcategory::where("preYrQuesPaper",1)->get()->toJson();
    }

    public function addCategory(BlogcatRequest $request)
    {
        $blCat = new Blogcategory;
        $blCat->catName = $request->catname;
        $blCat->parentCat = $request->pname;
        $blCat->seoTitle = $request->seoTitle;
        $blCat->metaKeys = $request->mKeywords;
        $blCat->metaDescription = $request->mDescription;

        $blCat->save();
        
        return Blogcategory::orderBy("created_at","desc")->get()->toJson();
        
    }
    public function updateCategory(BlogcatRequest $request)
    {
        $blCat = Blogcategory::find($request->catId);
        $blCat->catName = $request->catname;
        $blCat->parentCat = $request->pname;
        $blCat->seoTitle = $request->seoTitle;
        $blCat->metaKeys = $request->mKeywords;
        $blCat->metaDescription = $request->mDescription;

        $blCat->save();
        
        return Blogcategory::orderBy("created_at","desc")->get()->toJson();
        
    }
    

    public function changeCatState($catId)
    {
        $blCat = Blogcategory::find($catId);
        if ($blCat->status == 1) {
            $blCat->status =0;
        }
        else{
            $blCat->status = 1;
        }

        if ($blCat->save()) {
            $catlist = Blogcategory::orderBy("id","desc")->get();
            return $catlist->toJson();
         }
         else {
             return;
         }


    }

    public function deleteCategory(BlogcatRequest $request)
    {
        $blCat = Blogcategory::find($request->catId);
        
        $blCat->delete();
        
        return Blogcategory::orderBy("created_at","desc")->get()->toJson();
    }
    
    public function deleteBlogs($bid)
    {
        $blCat = Blog::find($bid);
        $blCat->delete();
        
        return "success";
    }
//  Blog  Section

    public function articleSetting()
    {
            $pageTitle = "Be and By Article List";
            return view("admin.article-setting")->with(["pageTitle"=>$pageTitle,]);
        
    }
    public function articlecount($catId)
    {
        $counts = Blog::where("category",$catId)->count();
        return $counts;
    }
    public function addarticle()
    {
        $pageTitle = "Be and By Create Article";
            return view("admin.addarticle")->with(["pageTitle"=>$pageTitle,]);
    }
    public function addarticleData(BlogRequest $request)
    {
          $blogs = new Blog;
          $blogs->title = $request->artName;     
          $blogs->category = $request->artCat;     
          $blogs->content = $request->artcontent;     
          $blogs->seoTitle = $request->mTitle;     
          $blogs->metaKeys = $request->mKeywords;     
          $blogs->metaDescription = $request->mDescription;     
          $blogs->image = $request->artImage;
          $blogs->tags = $request->artTags;
          $blogs->subjects = $request->artsubjects;
          $blogs->pdflink = $request->pdfLink;
          $blogs->youtubelink = $request->youtubeLink;
          $blogs->publishdate = $request->publishdate;
          $blogs->save();
          
          return;
    }
    public function editarticle($articleId)
    {
        $pageTitle = "Be and By Edit Article";
            return view("admin.editarticle")->with(["pageTitle"=>$pageTitle,"blogId"=>$articleId]);
    }
    public function editarticleData(Request $request)
    {
        $this->validate($request,[
            "artName"=>"required",
            "artCat"=>"required|numeric",
            "artcontent"=>"required",
            "publishdate"=>"date",
        ]);

          $blogs = Blog::find($request->artid);
          $blogs->title = $request->artName;     
          $blogs->category = $request->artCat;     
          $blogs->content = $request->artcontent;     
          $blogs->seoTitle = $request->mTitle;     
          $blogs->metaKeys = $request->mKeywords;     
          $blogs->metaDescription = $request->mDescription;     
          $blogs->image = $request->artImage;
          $blogs->tags = $request->artTags;
          $blogs->subjects = $request->artsubjects;
          $blogs->pdflink = $request->pdfLink;
          $blogs->youtubelink = $request->youtubeLink;
          $blogs->publishdate = $request->publishdate;
          $blogs->save();
          
          return;
    }

    public function blogList($catId)
    {
        $pageTitle = "Be and By Create Article";
            return view("admin.articleList")->with(["pageTitle"=>$pageTitle,"mycatId"=>$catId]);
    }
    public function blogListCatwise($catId=0)
    {
        if ($catId != 0) {
            $blogList = Blog::orderBy("created_at", "desc")->where("category",$catId)->get();
        }
        else {
            $blogList = Blog::orderBy("created_at", "desc")->where("category","null")->get();
        }
        
        return $blogList->toJson();
    }
    public function blogListCatwise2($catId=0)
    {
        if ($catId != 0) {
            $blogList = Blog::orderBy("created_at", "desc")->where("status",1)->where("category",$catId)->paginate(30);
        }
        else {
            $blogList = Blog::orderBy("created_at", "desc")->where("status",1)->where("category","null")->paginate(30);
        }
        
        return $blogList->toJson();
    }

    public function frontMcqDate($type)
    {
        if ($type == "mocktest" ) {
            $mock = 1;
        }
        else{
            $mock=0;
        }
        
        $dateList = Dailymcqdate::orderBy("id", "desc")->where("type",$mock)->paginate(30);
        return $dateList->toJson();
    }
    public function freemocktest()
    {
        $pageTitle = "Free Mock Test - Be and By IAS";
        return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function freemocktestQuestion($mcqdate,$dateid)
    {
        $pageTitle = "Free Mock Test - Be and By IAS";
        return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    
    public function singleMcqDateInfo($dateid)
    {
        $dateList = Dailymcqdate::find($dateid);
        return $dateList->toJson();
    }
    public function postCatList($catName,$catId)
    {
        $pageTitle = $catName." : Be and By IAS";
        return view("index")->with(["pageTitle"=>$pageTitle]);
    }

    public function topblogs($blogNum = 10)
	{
		$courselist = Blog::take($blogNum)->orderBy("id","desc")->get();
		return $courselist->toJson();
	}

    public function singleArticleInfo($articleTitle,$articleId)
    {
        $pageTitle = $articleTitle." : Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function singleBlogInfo($articleId)
    {
        $bInfo = Blog::find($articleId);
        return $bInfo->toJson();
    }
    public function changeState($articleId)
    {
        $bInfo = Blog::find($articleId);
        if ($bInfo->status == 0) {
            $bInfo->status =1;
        }
        else{
            $bInfo->status =0;
        }
        $bInfo->save();
        return 'success';
    }


    //  Blog Section
    // Tag section
    public function tagsList($num = 0)
    {
        if ($num == 0) {
            $list = Tag::all();
        }
        else{
            $list = Tag::orderby("id", "desc")->limit($num)->get();
        }
        
        return $list->toJson();
    }
    public function tagsearchadd(Request $request)
    {
        $tagg = new Tag;
        $tagg->name = $request->newTag;
        $tagg->code = $request->newTag;
        $tagg->save();
        return $tagg::all()->toJson();
    }
    // Tag section
    
    // subject Section
    public function subjectadd(Request $request)
    {
        $sub = new Blogsubject;
        $sub->name = $request->newSub;
        $sub->code = $request->newSub;
        $sub->save();
        return $sub::all()->toJson();
    }
    public function subjectList()
    {
        $list = Blogsubject::all();
        return $list->toJson();
    }
    
    // subject Section
    
    // Search 
        public function searchresult()
        {
            $pageTitle = " : Be and By IAS";
    	    return view("index")->with(["pageTitle"=>$pageTitle]);
        }

        public function blogqueryResult($searchKey="all",$searchType="all")
        {
            if ($searchType == "article") {
                
                $result = Blog::where('title', 'LIKE', '%' . $searchKey . '%')
                            ->orWhere("content", 'LIKE', '%' . $searchKey . '%')
                            ->orWhere("metaKeys", 'LIKE', '%' . $searchKey . '%')
                            ->orWhere("metaDescription", 'LIKE', '%' . $searchKey . '%')
                            ->orWhere("tags", 'LIKE', '%' . $searchKey . '%')
                            ->orWhere("subjects", 'LIKE', '%' . $searchKey . '%')
                            ->orderby("id","desc")->paginate(30);    
            }
            elseif ($searchType == "tag") {
                $result = Blog::where('tags', 'LIKE', '%' . $searchKey . '%')
                            ->orderby("id","desc")->paginate(30);
            }
            elseif ($searchType == "subject") {
                $result = Blog::where('subjects', 'LIKE', '%' . $searchKey . '%')
                            ->orderby("id","desc")->paginate(30);
            }
            elseif ($searchType == "range") {
                $result = Blog::where('created_at', 'LIKE', '%' . $searchKey . '%')
                            ->orderby("id","desc")->paginate(30);
            }
            else{
                $result = Blog::orderby("id","desc")->paginate(30);
            }
            
            return $result->toJson();
                
        }
    // Search

    // all blogs
    public function allarticle()
    {
        $pageTitle = " : Be and By IAS";
        return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function getallarticle()
    {
        $allblogs = Blog::orderby("id","desc")->paginate(60);
        return $allblogs->toJson();
    }


}
