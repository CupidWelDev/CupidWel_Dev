// indexedDB 코드 작성

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
    const objectStore = db.createObjectStore("scholarship", {
      keyPath: "id",
    });
  };
};

// indexedDB 데이터베이스에 데이터 추가
export const addDB = (data) => {
  const request = window.indexedDB.open("recentlyView", 1);
  request.onerror = (event) => {
    console.log("데이터베이스 열기 실패");
  };
  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(["scholarship"], "readwrite");
    const objectStore = transaction.objectStore("scholarship");
    const request = objectStore.add(data);
    request.onsuccess = (event) => {
      console.log("데이터 추가 성공");
    };
  };
};

// indexedDB 데이터베이스에서 데이터 가져오기 (useState의 set 함수 인자로 넘겨주기)
export const getDB = (setFnc) => {
  const request = window.indexedDB.open("recentlyView", 1);
  request.onerror = (event) => {
    console.log("데이터베이스 열기 실패");
  };
  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(["scholarship"], "readwrite");
    const objectStore = transaction.objectStore("scholarship");
    const request = objectStore.getAll();
    request.onsuccess = (event) => {
      console.log("데이터 가져오기 성공");
      // console.log(request.result);
      setFnc(request.result);
    };
  };
  return request;
};

// indexedDB 데이터베이스에서 데이터 삭제
export const deleteDB = (id) => {
  const request = window.indexedDB.open("recentlyView", 1);
  request.onerror = (event) => {
    console.log("데이터베이스 열기 실패");
  };
  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(["scholarship"], "readwrite");
    const objectStore = transaction.objectStore("scholarship");
    const request = objectStore.delete(id);
    request.onsuccess = (event) => {
      console.log("데이터 삭제 성공");
    };
  };
};

// indexedDB 데이터베이스에서 데이터 전체 삭제
export const clearDB = () => {
  const request = window.indexedDB.open("recentlyView", 1);
  request.onerror = (event) => {
    console.log("데이터베이스 열기 실패");
  };
  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(["scholarship"], "readwrite");
    const objectStore = transaction.objectStore("scholarship");
    const request = objectStore.clear();
    request.onsuccess = (event) => {
      console.log("데이터 전체 삭제 성공");
    };
  };
};
