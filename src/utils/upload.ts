// import { WorkExperience } from './../service-provider/schema/work-experience.schema';

import * as pdf from 'pdf-parse';

class UploadDocument {
  document: any;
  constructor(document = '') {
    this.document = document;
  }

  public async parseDocument() {
    try {
      console.log('Parsing document...', this.document);
      const { text } = await pdf(this.document);
      console.log(text);
      return text;
    } catch (err) {
      console.log(err);
    }
  }

  public async pickKeywords(processedDocument: string) {
    // const currentDocumentDetails = [];
    // const document: string[] = processedDocument.replace(/\n/g, ' ').split('');
    // for (let i = 0; i < document.length; i++) {
    //   const name = document[i].split('Name:  ').pop()?.split(',')[0];
    //   const title = document[i].split(`Title: `).pop()?.split('Step')[0];
    //   const objectives = document[i].split(`Objectives:`).pop()?.split(' ')[0];
    //   const workExperience = document[i]
    //     .split(`WorkExperience:`)
    //     .pop()
    //     ?.split(' ')[0];
    //   const education = document[i].split(`Education`).pop()?.split(' ')[0];
    //   if (name) {
    //     currentDocumentDetails.push({
    //       name,
    //       title,
    //       objectives,
    //       workExperience,
    //       education,
    //     });
    //   }
    // }
    // return currentDocumentDetails;
  }

  // parse document
  // pick keywords in documents
  // create document
}

export default UploadDocument;
