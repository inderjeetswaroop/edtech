<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\MediaRequest;
use App\Models\Media;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    protected $initImgPath = "/storage/app/public/";
    public function mediaSetting()
    {
        return view('admin.media');
    }

    public function addMediaImageData(MediaRequest $request)
    {
          
        if ($request->hasFile('medimages')) {
            $picturesids=[];

            $imgfiles = $request->file('medimages');
            foreach ($imgfiles as $images){
                $images->getClientOriginalName();
                $extension = $images->getClientOriginalExtension();
                if ($extension == 'jpg' || $extension == 'jpeg' || $extension == 'png' || $extension == 'gif' || $extension == 'pdf') {
                    $type = 1;
                    $path = $images->store('images/category','public');
                }
                else {
                    $type=0;
                    $path = $images->store('images/category/videos','public');
                }
                // $path = $images->store('images/category','public');
                $mediaimage = new Media;
                $mediaimage->src = $this->initImgPath.$path;
                $mediaimage->imgpath = $path;
                $mediaimage->type = $type;
                $mediaimage->save();
                $picturesids[] = $mediaimage->id;

            }
            return Media::find($picturesids);

            
        }
        else{
           return;
        }
    }

    public function uploadDaf(Request $request)
    {
        if ($request->hasFile('medimages')) {
            $picturesids="";

            $imgfiles = $request->file('medimages');
            $imgfiles->getClientOriginalName();
            $extension = $imgfiles->getClientOriginalExtension();
            if ($extension == 'pdf') {
                $path = $imgfiles->store('images/category/videos','public');
                $mediaimage = new Media;
                $mediaimage->src = $this->initImgPath.$path;
                $mediaimage->imgpath = $path;
                $mediaimage->extension = "pdf";
                $mediaimage->type = 1;
                $mediaimage->save();
                $picturesids = $mediaimage->id;
                return Media::find($picturesids);
            }
            else{
                return "Wrong File";
            }
        }
        else{
            return "empty";
        }
    }

    public function allimages()
    {
        $allimages = Media::orderByDesc('id')->get();
        return $allimages->toJson();
    }

    public function singleMediaInfo($mid)
    {
        $minfo = Media::find($mid);
        if ($minfo) {
            return $minfo->toJson();
        }
        else {
            return;
        }
        
    }
    public function deletesingleMediaInfo($mid)
    {
        $minfo = Media::find($mid);
        $path = $minfo->imgpath;
        if ($minfo->delete()) {
            Storage::delete("/public/".$path);
            $allimages= Media::orderByDesc('id')->get();
            return $allimages->toJson();
        }
        else {
            return;
        }
    }

    public function deleteMultiples(Request $request)
    {
        $delimages = $request->medimages;
         $arr2 = $delimages[0];
         $arr = explode(',',$arr2);
        
        for($i=0; $i < sizeof($arr) ; $i++) { 
            $imgid = $arr[$i];
            $imginfo = Media::find($imgid);
            $path = $imginfo->imgpath;
                if ($imginfo->delete()) {
                    Storage::delete("/public/".$path);
                }
            
        }
        $allimages= Media::orderByDesc('id')->get();
        return $allimages;
    }

    public function imguploadS3()
    {
        return view("imageuploadtesting");
    }

    public function imguploadS3Data(Request $request)
    {
        $this->validate($request,[
            "image" => "required|image",
        ]);

        if ($request->hasFile("image")) {
            $file = $request->file("image");
            $filepath = "images/".time().$file->getclientOriginalName();
            Storage::disk('s3')->put($filepath, file_get_contents($file));
            echo "Image Uploaded";
        }
        
    }
    
}
