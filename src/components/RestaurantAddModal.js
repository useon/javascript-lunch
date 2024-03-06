class RestaurantAddModal extends HTMLElement {
  static observedAttributes = ['open'];

  constructor() {
    super();
  }

  connectedCallback() {
    if (this.isConnected) {
      this.render();
      this.setEvent();
    }
  }

  disconnectedCallback() {
    this.removeEvent();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const open = this.getAttribute('open');
    this.innerHTML = this.template(JSON.parse(open));
  }

  setEvent() {
    // this.querySelector('.button--primary').addEventListener('click', () => {
    //   this.dispatchEvent(
    //     new CustomEvent('sumbitButtonClick', {
    //       bubbles: true,
    //     }),
    //   );
    // });
    // this.querySelector('.button--secondary').addEventListener('click', () => {
    //   this.dispatchEvent(
    //     new CustomEvent('cancelButtonClick', {
    //       bubbles: true,
    //     }),
    //   );
    // });
  }

  removeEvent() {}

  template(open) {
    if (open) {
      return `
          <div class="modal modal--open">
              <div class="modal-backdrop"></div>
              <div class="modal-container">
                  <h2 class="modal-title text-title">새로운 음식점</h2>
                  <form>
                      <div class="form-item form-item--required">
                          <label for="category text-caption">카테고리</label>
                          <filter-box type="modal-category" option="${[
                            '선택해주세요',
                            '한식',
                            '중식',
                            '일식',
                            '아시안',
                            '양식',
                            '기타',
                          ]}"></filter-box>
                      </div>
                      <div class="form-item form-item--required">
                          <label for="name text-caption">이름</label>
                          <input type="text" name="name" id="name" required />
                      </div>
                      <div class="form-item form-item--required">
                          <label for="distance text-caption">거리(도보 이동 시간)</label>
                          <filter-box type="modal-distance" option="${[
                            '선택해주세요',
                            '5분내',
                            '10분내',
                            '15분내',
                            '20분내',
                            '30분내',
                          ]}"></filter-box>
                      </div>
                      <div class="form-item">
                          <label for="description text-caption">설명</label>
                          <textarea name="description" id="description" cols="30" rows="5"></textarea>
                          <span class="help-text text-caption">메뉴 등 추가 정보를 입력해 주세요.</span>
                      </div>
                      <div class="form-item">
                          <label for="link text-caption">참고 링크</label>
                          <input type="text" name="link" id="link" />
                          <span class="help-text text-caption">매장 정보를 확인할 수 있는 링크를 입력해 주세요.</span>
                      </div>
                      <div class="button-container">
                          <button type="button" class="button button--secondary text-caption">취소하기</button>
                          <button class="button button--primary text-caption">추가하기</button>
                      </div>
                  </form>
              </div>
          </div>
      `;
    }

    return ``;
  }
}

export default RestaurantAddModal;