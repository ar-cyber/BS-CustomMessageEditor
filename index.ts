// Imports
import { Buffer } from "buffer"
import {
    Alignment,
    Autoformat,
    AutoImage,
    Autosave,
    Base64UploadAdapter,
    BlockQuote,
    Bold,
    ClassicEditor,
    Code,
    CodeBlock,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    FullPage,
    GeneralHtmlSupport,
    Heading,
    Highlight,
    HorizontalLine,
    HtmlComment,
    HtmlEmbed,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    Markdown,
    MediaEmbed,
    Mention,
    Paragraph,
    PasteFromMarkdownExperimental,
    PasteFromOffice,
    RemoveFormat,
    ShowBlocks,
    SourceEditing,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    Style,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    TodoList,
    Underline,
    WordCount,
  } from "ckeditor5"
  
  import "ckeditor5/ckeditor5.css"
  
  import "./css/ckeditor.css"
  import { toInteger } from "lodash"
  
  const editorConfig = {
    toolbar: {
      items: [
        "sourceEditing",
        "showBlocks",
        "findAndReplace",
        "|",
        "heading",
        "style",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "subscript",
        "superscript",
        "code",
        "removeFormat",
        "|",
        "emoji",
        "specialCharacters",
        "horizontalLine",
        "link",
        "insertImage",
        "mediaEmbed",
        "insertTable",
        "highlight",
        "blockQuote",
        "codeBlock",
        "htmlEmbed",
        "|",
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "outdent",
        "indent",
      ],
      shouldNotGroupWhenFull: true,
    },
    plugins: [
      Alignment,
      Autoformat,
      AutoImage,
      Autosave,
      Base64UploadAdapter,
      BlockQuote,
      Bold,
      Code,
      CodeBlock,
      Essentials,
      FindAndReplace,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      FullPage,
      GeneralHtmlSupport,
      Heading,
      Highlight,
      HorizontalLine,
      HtmlComment,
      HtmlEmbed,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsert,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      Markdown,
      MediaEmbed,
      Mention,
      Paragraph,
      PasteFromMarkdownExperimental,
      PasteFromOffice,
      RemoveFormat,
      ShowBlocks,
      SourceEditing,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Strikethrough,
      Style,
      Subscript,
      Superscript,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TextTransformation,
      TodoList,
      Underline,
      WordCount,
    ],
    fontFamily: {
      supportAllValues: true,
    },
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    htmlSupport: {
      allow: [
        {
          name: /^.*$/,
          styles: true,
          attributes: true,
          classes: true,
        },
      ],
    },
    image: {
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "imageStyle:inline",
        "imageStyle:wrapText",
        "imageStyle:breakText",
        "|",
        "resizeImage",
      ],
    },
    licenseKey: "GPL",
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
    mention: {
      feeds: [
        {
          marker: "@",
          feed: [
            /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
          ],
        },
      ],
    },
    placeholder: "Type or paste your content here!",
    style: {
      definitions: [
        {
          name: "Article category",
          element: "h3",
          classes: ["category"],
        },
        {
          name: "Title",
          element: "h2",
          classes: ["document-title"],
        },
        {
          name: "Subtitle",
          element: "h3",
          classes: ["document-subtitle"],
        },
        {
          name: "Info box",
          element: "p",
          classes: ["info-box"],
        },
        {
          name: "Side quote",
          element: "blockquote",
          classes: ["side-quote"],
        },
        {
          name: "Marker",
          element: "span",
          classes: ["marker"],
        },
        {
          name: "Spoiler",
          element: "span",
          classes: ["spoiler"],
        },
        {
          name: "Code (dark)",
          element: "pre",
          classes: ["fancy-code", "fancy-code-dark"],
        },
        {
          name: "Code (bright)",
          element: "pre",
          classes: ["fancy-code", "fancy-code-bright"],
        },
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
      ],
    },
  }
  

async function HandleCME(): Promise<void> {
    function AppendID(response: string) {
      `Push the ID to the fields`
      const obj = JSON.parse(response)
      fields.push(`${obj.payload.id}`)
    }
    async function SendMessage(html: any) {
      var parts: any = []
      var children = (document.querySelector(".list") as HTMLElement).children
      for (var i = 0; i < children.length; i++) {
        var child = children[i] as HTMLElement
        var classname = child.className
        // Could be a switch but this works and isn't changing rn
        if (classname.includes("staff")) {
          parts.push({
            staff: true,
            id: toInteger(child.getAttribute("item-id")),
          })
        } else if (classname.includes("student")) {
          parts.push({
            student: true,
            id: toInteger(child.getAttribute("item-id")),
          })
        } else if (classname.includes("tutor")) {
          parts.push({
            tutor: true,
            id: toInteger(child.getAttribute("item-id")),
          })
        }
      }
      
      let subject;
      var item = (document.querySelector(".uiShortText.subject") as HTMLInputElement)
      if (item.value == "") {
        subject = "No subject given"
      } else {
        subject = item.value
      }
      let blinditem: boolean;
      var blind = (<HTMLInputElement>((document.querySelector(".blind") as HTMLElement).children[0])).getAttribute("data-checked")
      console.log(blind)
      if (blind == "1") {
        blinditem = true
      } else {
        blinditem = false
      }
      console.log(parts)
      const payload = JSON.stringify({
        subject: subject,
        contents: html,
        participants: parts,
        blind: blinditem,
        files: fields,
      })
      await fetch(
        `https://${window.location.hostname}/seqta/student/save/message`,
        {
          method: "POST",
          body: payload,
          headers: {
            Accept: "text/javascript, text/html, application/xml, text/xml, */*",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "en-US,en;q=0.9,en-AU;q=0.8",
            "Content-Length": `${Buffer.byteLength(payload)}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
        },
      )
      console.log(html)
      window.location.reload() 
      return
    }
    if (settingsState.cme) { // As this script runs regardless if the settingsState is set, this is REQUIRED.
      document.getElementById("content")?.remove()
      console.info("[BetterSEQTA+] Loading Message Editor")
      var closeelement = document.querySelector('[data-id="send"]') as HTMLElement
      closeelement.setAttribute("data-id", "")
      closeelement.setAttribute("id", "customsendbutton")
      var cancelelement = document.querySelector('[data-id="cancel"]') as HTMLElement
      cancelelement.setAttribute("data-id", "")
      cancelelement.addEventListener("click", () => {
        window.location.reload()
      })
      var fields:any = []
  
      const div = document.querySelector(".body") as HTMLElement
      div.innerHTML = ""
  
      // Create Elements for Editor
      var header = document.createElement("div")
      header.className = "messageheader"
      header.style.width = "550px";
      (document.querySelector(".blind") as HTMLElement).after(header)
      var wc = document.createElement("div")
      wc.className = "wordcount";
      (document.querySelector(".body") as HTMLElement).after(wc);
      (document.querySelector(".body") as HTMLElement).style["width"] = "550px"
      // Define the Editor.
      let e: any
      ClassicEditor.create(
        div,
        editorConfig as any,
      ).then((editor) => {
        e = editor
      })
      closeelement!.addEventListener("click", async () => {
        await SendMessage(e.getData())
      })
  
      // Handling of files.
      async function HandleFiles(): Promise<void> {
        const handlerb = document.querySelector(".uiFileHandler") as HTMLElement
        handlerb.className = "somefilebitthingy1"
        handlerb.setAttribute("style", "text-align: center;")
        handlerb.querySelector(".note.droppable")?.remove()
        let child2 = document.createElement("div")
        child2.className = "customdroppablefield"
        handlerb.after(child2)
        child2.addEventListener("dragover", () => {
          child2.setAttribute("style", "color: red;")
        });
        
        child2.addEventListener("drop", (event) => {
            child2.setAttribute("style", "")
            const ev = event as DragEvent
            console.log("File(s) dropped")
        
            // Prevent default behavior (Prevent file from being opened)
            ev.preventDefault()
        
            if ((ev.dataTransfer as DataTransfer).items) {
              // Use DataTransferItemList interface to access the file(s)
              [...(ev.dataTransfer as DataTransfer).items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === "file") {
                  const file = item.getAsFile() as File
                  console.log(`… file[${i}].name = ${file.name}`)
                  const xhr = new XMLHttpRequest()
                  xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                      AppendID(xhr.response)
                      var filea = document.querySelector(".uiFileList") as HTMLElement
                      var filearea = filea.querySelector(".list.inline.no-controls") as HTMLElement
                      var e = document.createElement("a")
                      e.setAttribute("target", "_blank")
                      e.setAttribute("class", "uiFile inline")
                      e.setAttribute("data-file", JSON.parse(xhr.response).payload.id)
                      e.setAttribute("style", "background-color: rgb(77, 105, 191);")
                      e.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><g style="fill: currentcolor;"><path d="M12.984 9h5.531l-5.531-5.484v5.484zM6 2.016h8.016l6 6v12c0 1.078-0.938 1.969-2.016 1.969h-12c-1.078 0-2.016-0.891-2.016-1.969l0.047-16.031c0-1.078 0.891-1.969 1.969-1.969z"></path></g></svg><span class="name">${JSON.parse(xhr.response).payload.filename}</span>`
                      filearea.append(e)
                      e.addEventListener("click", () => {
                        var id = JSON.parse(xhr.response).payload.id
                        var ef = document.querySelector(`a[data-file = '${id}']`) as HTMLElement
                        ef.remove()
                        var id2: any = fields.indexOf(id)
                        fields.splice(id2, 1)
                      })
                    }
                  }
                  xhr.open(
                    "POST",
                    `https://${window.location.hostname}/seqta/student/file/upload/xhr2`,
                    true,
                  )
                  xhr.setRequestHeader("X-File-Name", file.name)
                  xhr.setRequestHeader("X-File-Size", String(file.size))
                  xhr.setRequestHeader("Content-Type", file.type)
                  xhr.send(file)
                }
              })
            } else {
              // Use DataTransfer interface to access the file(s)
              [...(ev.dataTransfer as DataTransfer).files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`)
              })
            }
          }
        )
        
        
  
  
        const handler = handlerb.children
        for (var i = 0; i < handler.length; i++) {
          var child = handler[i] as HTMLElement
          var classname = child.className
          if (classname == undefined) {
            continue
          } else if (classname.includes("uiButton")) {
            child.remove()
  
            var b = document.createElement("input")
            b.setAttribute("type", "file")
            b.setAttribute("id", "file")
            var a = document.createElement("label")
            a.setAttribute("for", "file")
            a.className = "formItem"
            a.innerHTML = "Select a file"
            child2.before(b)
            child2.appendChild(a)
          }}
        const logs = document.createElement("div")
        logs.setAttribute("id", "output")
        logs.setAttribute("style", "display: none;")
  
        const pb = document.createElement("progress")
        pb.setAttribute("id", "progress")
        pb.setAttribute("style", "display: none;")
        var ia = document.getElementById("file") as HTMLElement
        ia.before(logs)
        ia.before(pb)
        // handlerb.appendChild(ab)
        const fileInput = document.getElementById("file") as HTMLElement
        const progressBar = document.getElementById("progress") as HTMLProgressElement
        const log = document.getElementById("output") as HTMLElement
        // const abortButton = document.getElementById("abort")
  
        fileInput.addEventListener("change", () => {
          const xhr = new XMLHttpRequest()
          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
              AppendID(xhr.response)
              var filea = document.querySelector(".uiFileList") as HTMLElement
              var filearea = filea.querySelector(".list.inline.no-controls") as HTMLElement
              var e = document.createElement("a")
              e.setAttribute("target", "_blank")
              e.setAttribute("class", "uiFile inline")
              e.setAttribute("data-file", JSON.parse(xhr.response).payload.id)
              e.setAttribute("style", "background-color: rgb(77, 105, 191);")
              e.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><g style="fill: currentcolor;"><path d="M12.984 9h5.531l-5.531-5.484v5.484zM6 2.016h8.016l6 6v12c0 1.078-0.938 1.969-2.016 1.969h-12c-1.078 0-2.016-0.891-2.016-1.969l0.047-16.031c0-1.078 0.891-1.969 1.969-1.969z"></path></g></svg><span class="name">${JSON.parse(xhr.response).payload.filename}</span>`
  
              filearea.append(e)
              e.addEventListener("click", () => {
                var id = JSON.parse(xhr.response).payload.id
                var ef = document.querySelector(`a[data-file = '${id}']`) as HTMLElement
                ef.remove()
                var id2 = fields.indexOf(id)
                fields.splice(id2, 1)
              })
            }
          }
  
          // When the upload starts, we display the progress bar
          xhr.upload.addEventListener("loadstart", () => {
            progressBar.setAttribute("style", "display: block")
            progressBar.value = 0
            progressBar.max = 100
          })
  
          // Each time a progress event is received, we update the bar
          xhr.upload.addEventListener("progress", (event) => {
            progressBar.value = (event.loaded / event.total)*100
            log.textContent = `Uploading (${(
              (event.loaded / event.total) *
              100
            ).toFixed(2)}%)…`
          })
  
          // When the upload is finished, we hide the progress bar.
          xhr.upload.addEventListener("loadend", (event) => {
            progressBar.setAttribute("style", "display: none")
            if (event.loaded !== 0) {
              log.textContent = "Upload finished."
            }
          })
  
          // In case of an error, an abort, or a timeout, we hide the progress bar
          // Note that these events can be listened to on the xhr object too
          function errorAction(event: any) {
            progressBar.classList.remove("visible")
            log.textContent = `Upload failed: ${event.type}`
          }
          xhr.upload.addEventListener("error", errorAction)
          xhr.upload.addEventListener("abort", errorAction)
          xhr.upload.addEventListener("timeout", errorAction)
  
          // Build the payload
  
          // Theoretically, event listeners could be set after the open() call
          // but browsers are buggy here
          xhr.open(
            "POST",
            `https://${window.location.hostname}/seqta/student/file/upload/xhr2`,
            true,
          )
          xhr.setRequestHeader("X-File-Name", fileInput.files[0].name)
          xhr.setRequestHeader("X-File-Size", fileInput.files[0].size)
          xhr.setRequestHeader("Content-Type", fileInput.files[0].type)
          xhr.send(fileInput.files[0])
        })
        return
      }
      // Call the FileHandler
      HandleFiles()
    } else { return }}

