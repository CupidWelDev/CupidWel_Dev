import { FieldValues } from "react-hook-form";

// indexedDB 데이터베이스 열기
export const openDB = () => {
  const request = window.indexedDB.open("recentlyView", 1);
  request.onerror = (event) => {
    console.log("데이터베이스 열기 실패");
  };
  request.onsuccess = (event) => {
    console.log("데이터베이스 열기 성공");
  };
  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const scholarshipStore = db.createObjectStore("scholarship", {
      keyPath: "id",
    });
    const searchStore = db.createObjectStore("search", {
      keyPath: "id",
    });
  };
};

// indexedDB 데이터베이스에 데이터 추가
export const addDB = (data: FieldValues | undefined, title: string) => {
  const request = window.indexedDB.open("recentlyView", 1);
  request.onerror = (event) => {
    console.log("데이터베이스 열기 실패");
  };
  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction([title], "readwrite");
    const objectStore = transaction.objectStore(title);
    const request = objectStore.add(data);
    request.onsuccess = () => {
      console.log("데이터 추가 성공");
    };
  };
};

// indexedDB 데이터베이스에서 데이터 가져오기 (useState의 set 함수 인자로 넘겨주기)
export const getDB = (setFnc, title: string) => {
  const request = window.indexedDB.open("recentlyView", 1);
  request.onerror = (event) => {
    console.log("데이터베이스 열기 실패");
  };
  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction([title], "readwrite");
    const objectStore = transaction.objectStore(title);
    const request = objectStore.getAll();
    request.onsuccess = (event) => {
      console.log("데이터 가져오기 성공");
      // console.log(title, request.result.length);
      setFnc(request.result);
    };
  };
  return request;
};

// indexedDB 데이터베이스에서 데이터 삭제
export const deleteDB = (id, title: string) => {
  const request = window.indexedDB.open("recentlyView", 1);
  request.onerror = (event) => {
    console.log("데이터베이스 열기 실패");
  };
  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction([title], "readwrite");
    const objectStore = transaction.objectStore(title);
    const request = objectStore.delete(id);
    request.onsuccess = (event) => {
      console.log("데이터 삭제 성공");
    };
  };
};

// indexedDB 데이터베이스에서 데이터 전체 삭제
export const clearDB = (title: string) => {
  const request = window.indexedDB.open("recentlyView", 1);
  request.onerror = (event) => {
    console.log("데이터베이스 열기 실패");
  };
  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction([title], "readwrite");
    const objectStore = transaction.objectStore(title);
    const request = objectStore.clear();
    request.onsuccess = (event) => {
      console.log("데이터 전체 삭제 성공");
    };
  };
};
