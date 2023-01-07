
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextTiny(props) {
  const editorRef = useRef(null);
  const log = () => {
    props.setEmojiVisible(false)
    if (editorRef.current) {
        console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey='r9y7enoam6npr991gtpgbhohkecqbi6qi82mpzrpfgdsg0g7'
        onInit={(evt, editor) => editorRef.current = editor}
        // onChange={()=>log()}
        initialValue="<p>Note: To get suggestions for emojis please add ':' before typing anything.</p>"
        init={{
          height: 160,
          width: 300,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount','emoticons'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help' + 'emoticons',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log} className="bri-btn btn-primary">Save</button>
    </>
  );
}